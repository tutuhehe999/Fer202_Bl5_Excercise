import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { Badge, Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { initialAttendances } from "./data";

const STORAGE_KEY = "attendanceData";

function attendanceReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_STATUS":
      return state.map((attendance) =>
        attendance.id === action.id
          ? {
              ...attendance,
              status: attendance.status === "PRESENT" ? "ABSENT" : "PRESENT",
            }
          : attendance
      );
    case "DELETE_RECORD":
      return state.filter((attendance) => attendance.id !== action.id);
    default:
      return state;
  }
}

function getInitialAttendances() {
  try {
    const savedAttendances = localStorage.getItem(STORAGE_KEY);
    return savedAttendances ? JSON.parse(savedAttendances) : initialAttendances;
  } catch {
    return initialAttendances;
  }
}

function App() {
  const [attendances, dispatch] = useReducer(
    attendanceReducer,
    undefined,
    getInitialAttendances
  );
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const searchInputRef = useRef(null);

  const filteredAttendances = useMemo(() => {
    const searchText = nameFilter.trim().toLocaleLowerCase("vi");

    return attendances.filter((attendance) => {
      const matchesName = attendance.name
        .toLocaleLowerCase("vi")
        .includes(searchText);
      const matchesStatus =
        statusFilter === "ALL" || attendance.status === statusFilter;

      return matchesName && matchesStatus;
    });
  }, [attendances, nameFilter, statusFilter]);

  const statistics = useMemo(() => {
    const total = filteredAttendances.length;
    const present = filteredAttendances.filter(
      (attendance) => attendance.status === "PRESENT"
    ).length;
    const absent = total - present;
    const percentage = total === 0 ? 0 : (present / total) * 100;

    return { total, present, absent, percentage };
  }, [filteredAttendances]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attendances));
  }, [attendances]);

  useEffect(() => {
    const focusSearchInput = (event) => {
      if (event.key === "/" && document.activeElement !== searchInputRef.current) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", focusSearchInput);
    return () => window.removeEventListener("keydown", focusSearchInput);
  }, []);

  const toggleStatus = useCallback((id) => {
    dispatch({ type: "TOGGLE_STATUS", id });
  }, []);

  const deleteRecord = useCallback((attendance) => {
    const shouldDelete = window.confirm(
      `Bạn có chắc muốn xóa bản ghi của ${attendance.name}?`
    );

    if (shouldDelete) {
      dispatch({ type: "DELETE_RECORD", id: attendance.id });
    }
  }, []);

  const resetFilters = useCallback(() => {
    setNameFilter("");
    setStatusFilter("ALL");
    searchInputRef.current?.focus();
  }, []);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("vi-VN", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));

  return (
    <main>
      <Container className="py-4">
        <h1 className="h3 mb-4">Hệ Thống Quản Lý Điểm Danh Lớp Học</h1>

        <Row className="g-2 mb-3">
          <Col xs={12} md={3}>
            <Form.Control
              ref={searchInputRef}
              type="search"
              value={nameFilter}
              onChange={(event) => setNameFilter(event.target.value)}
              placeholder="Tìm kiếm theo tên sinh viên"
              aria-label="Tìm kiếm theo tên sinh viên"
            />
          </Col>
          <Col xs={12} md={2}>
            <Form.Select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              aria-label="Lọc theo trạng thái"
            >
              <option value="ALL">Tất cả trạng thái</option>
              <option value="PRESENT">Có mặt (PRESENT)</option>
              <option value="ABSENT">Vắng mặt (ABSENT)</option>
            </Form.Select>
          </Col>
          <Col xs={12} md="auto">
            <Button variant="secondary" onClick={resetFilters}>
              Reset Bộ Lọc
            </Button>
          </Col>
        </Row>

        <p className="mb-3">
          Tổng số bản ghi: <strong>{statistics.total}</strong>
          {" | "}Có mặt: <strong>{statistics.present}</strong>
          {" | "}Vắng mặt: <strong>{statistics.absent}</strong>
          {" | "}Tỷ lệ đi học: <strong>{statistics.percentage.toFixed(1)}%</strong>
        </p>

        <Table hover responsive>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã Lớp</th>
              <th>Tên Sinh Viên</th>
              <th>Ngày</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendances.map((attendance, index) => (
              <tr key={attendance.id}>
                <td>{index + 1}</td>
                <td>{attendance.classId}</td>
                <td>{attendance.name}</td>
                <td>{formatDate(attendance.date)}</td>
                <td>
                  <Badge
                    as="button"
                    type="button"
                    bg={attendance.status === "PRESENT" ? "success" : "danger"}
                    onClick={() => toggleStatus(attendance.id)}
                    title="Nhấn để đổi trạng thái"
                  >
                    {attendance.status}
                  </Badge>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteRecord(attendance)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
            {filteredAttendances.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center">
                  Không tìm thấy dữ liệu phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </main>
  );
}

export default App;
