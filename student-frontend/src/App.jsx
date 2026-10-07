import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  // =========================
  // STATES
  // =========================

  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: ""
  });

  const [searchId, setSearchId] = useState("");

  const [searchedStudent, setSearchedStudent] = useState(null);

  const [editingId, setEditingId] = useState(null);

  const [message, setMessage] = useState("");


  // =========================
  // LOAD STUDENTS WHEN PAGE OPENS
  // =========================

  useEffect(() => {
    getAllStudents();
  }, []);


  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (event) => {

    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });

  };


  // =========================
  // GET ALL STUDENTS
  // =========================

  const getAllStudents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:1234/student/getAllStu"
      );

      setStudents(response.data);

      setMessage("Students loaded successfully");

    } catch (error) {

      console.log(error);

      setMessage("Error while getting students");

    }

  };


  // =========================
  // CREATE STUDENT
  // =========================

  const createStudent = async (event) => {

    event.preventDefault();

    try {

      await axios.post(
        "http://localhost:1234/student/createStudent",
        {
          firstName: student.firstName,
          lastName: student.lastName,
          age: Number(student.age),
          city: student.city
        }
      );

      setMessage("Student added successfully!");

      clearForm();

      getAllStudents();

    } catch (error) {

      console.log(error);

      setMessage("Error while creating student");

    }

  };


  // =========================
  // GET STUDENT BY ID
  // =========================

  const getStudentById = async () => {

    if (!searchId) {

      setMessage("Please enter student ID");

      return;

    }

    try {

      const response = await axios.get(
        `http://localhost:1234/student/getStudent/${searchId}`
      );

      setSearchedStudent(response.data);

      setMessage("Student found successfully!");

    } catch (error) {

      console.log(error);

      setSearchedStudent(null);

      setMessage("Student not found");

    }

  };


  // =========================
  // DELETE STUDENT
  // =========================

  const deleteStudent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:1234/student/deleteStudent/${id}`
      );

      setMessage("Student deleted successfully!");

      getAllStudents();

    } catch (error) {

      console.log(error);

      setMessage("Error while deleting student");

    }

  };


  // =========================
  // START EDIT
  // =========================

  const startEdit = (stu) => {

    setEditingId(stu.sId);

    setStudent({
      firstName: stu.firstName,
      lastName: stu.lastName,
      age: stu.age,
      city: stu.city
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  // =========================
  // UPDATE STUDENT
  // =========================

  const updateStudent = async (event) => {

    event.preventDefault();

    try {

      await axios.put(
        `http://localhost:1234/student/updateStudent/${editingId}`,
        {
          firstName: student.firstName,
          lastName: student.lastName,
          age: Number(student.age),
          city: student.city
        }
      );

      setMessage("Student updated successfully!");

      clearForm();

      getAllStudents();

    } catch (error) {

      console.log(error);

      setMessage("Error while updating student");

    }

  };


  // =========================
  // CLEAR FORM
  // =========================

  const clearForm = () => {

    setEditingId(null);

    setStudent({
      firstName: "",
      lastName: "",
      age: "",
      city: ""
    });

  };


  // =========================
  // CANCEL EDIT
  // =========================

  const cancelEdit = () => {

    clearForm();

    setMessage("Update cancelled");

  };


  // =========================
  // UI
  // =========================

  return (

    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="header-content">

          <div>

            <h1>
              Student Management System
            </h1>

            <p>
              Manage your students easily
            </p>

          </div>

          <div className="header-icon">
            🎓
          </div>

        </div>

      </header>


      <main className="main-container">


        {/* ================= MESSAGE ================= */}

        {message && (

          <div className="message">

            <span>
              {message}
            </span>

            <button
              onClick={() => setMessage("")}
              className="message-close"
            >
              ×
            </button>

          </div>

        )}


        {/* ================= STAT CARDS ================= */}

        <div className="stats-container">


          {/* TOTAL STUDENTS */}

          <div className="stat-card">

            <div className="stat-icon">
              👨‍🎓
            </div>

            <div className="stat-content">

              <p>
                Total Students
              </p>

              <h2>
                {students.length}
              </h2>

            </div>

          </div>


          {/* MANAGEMENT */}

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div className="stat-content">

              <p>
                Management
              </p>

              <h2>
                CRUD
              </h2>

            </div>

          </div>


          {/* BACKEND */}

          <div className="stat-card">

            <div className="stat-icon">
              💻
            </div>

            <div className="stat-content">

              <p>
                Backend
              </p>

              <h2>
                Spring Boot
              </h2>

            </div>

          </div>


          {/* DATABASE */}

          <div className="stat-card">

            <div className="stat-icon">
              🗄️
            </div>

            <div className="stat-content">

              <p>
                Database
              </p>

              <h2>
                MySQL
              </h2>

            </div>

          </div>

        </div>


        {/* ================= ADD / UPDATE ================= */}

        <div className="card">

          <div className="card-header">

            <div>

              <span className="section-label">
                {editingId
                  ? "EDIT STUDENT"
                  : "NEW STUDENT"}
              </span>

              <h2>

                {editingId
                  ? "Update Student"
                  : "Add New Student"}

              </h2>

              <p>

                {editingId
                  ? "Update student information"
                  : "Enter student details below"}

              </p>

            </div>

            <span className="card-icon">

              {editingId
                ? "✏️"
                : "➕"}

            </span>

          </div>


          <form
            onSubmit={
              editingId
                ? updateStudent
                : createStudent
            }
            className="student-form"
          >


            {/* FIRST NAME */}

            <div className="form-group">

              <label>
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={student.firstName}
                onChange={handleChange}
                required
              />

            </div>


            {/* LAST NAME */}

            <div className="form-group">

              <label>
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={student.lastName}
                onChange={handleChange}
                required
              />

            </div>


            {/* AGE */}

            <div className="form-group">

              <label>
                Age
              </label>

              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={student.age}
                onChange={handleChange}
                required
              />

            </div>


            {/* CITY */}

            <div className="form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={student.city}
                onChange={handleChange}
                required
              />

            </div>


            {/* BUTTONS */}

            <div className="form-buttons">

              <button
                type="submit"
                className="primary-btn"
              >

                {editingId
                  ? "✓ Update Student"
                  : "+ Add Student"}

              </button>


              {editingId && (

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>

              )}

            </div>

          </form>

        </div>


        {/* ================= FIND STUDENT ================= */}

        <div className="card">

          <div className="card-header">

            <div>

              <span className="section-label">
                SEARCH
              </span>

              <h2>
                Find Student
              </h2>

              <p>
                Search for a student using their ID
              </p>

            </div>

            <span className="card-icon">
              🔍
            </span>

          </div>


          <div className="search-box">

            <input
              type="number"
              placeholder="Enter Student ID"
              value={searchId}
              onChange={(e) =>
                setSearchId(e.target.value)
              }
            />

            <button
              onClick={getStudentById}
              className="primary-btn"
            >
              🔍 Get Student
            </button>

          </div>


          {/* SEARCH RESULT */}

          {searchedStudent && (

            <div className="student-result">

              <div className="result-avatar">

                {searchedStudent.firstName
                  .charAt(0)
                  .toUpperCase()}

              </div>

              <div className="result-details">

                <h3>

                  {searchedStudent.firstName}{" "}
                  {searchedStudent.lastName}

                </h3>

                <p>
                  <strong>ID:</strong>{" "}
                  {searchedStudent.sId}
                </p>

                <p>
                  <strong>Age:</strong>{" "}
                  {searchedStudent.age}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {searchedStudent.city}
                </p>

              </div>

            </div>

          )}

        </div>


        {/* ================= ALL STUDENTS ================= */}

        <div className="card">

          <div className="card-header">

            <div>

              <span className="section-label">
                STUDENT DIRECTORY
              </span>

              <h2>
                All Students
              </h2>

              <p>
                View and manage all registered students
              </p>

            </div>


            <button
              onClick={getAllStudents}
              className="refresh-btn"
            >
              ↻ Refresh
            </button>

          </div>


          <div className="table-container">

            <table>

              <thead>

                <tr>

                  <th>
                    ID
                  </th>

                  <th>
                    Student
                  </th>

                  <th>
                    Age
                  </th>

                  <th>
                    City
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {students.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="empty"
                    >
                      No students found
                    </td>

                  </tr>

                ) : (

                  students.map((stu) => (

                    <tr key={stu.sId}>


                      {/* ID */}

                      <td>

                        <span className="id-badge">
                          #{stu.sId}
                        </span>

                      </td>


                      {/* STUDENT */}

                      <td>

                        <div className="student-name">

                          <div className="avatar">

                            {stu.firstName
                              .charAt(0)
                              .toUpperCase()}

                          </div>

                          <div>

                            <strong>

                              {stu.firstName}{" "}
                              {stu.lastName}

                            </strong>

                            <small>
                              Student
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* AGE */}

                      <td>

                        <span className="age-badge">
                          {stu.age} years
                        </span>

                      </td>


                      {/* CITY */}

                      <td className="city-cell">

                        📍 {stu.city}

                      </td>


                      {/* ACTIONS */}

                      <td>

                        <div className="action-buttons">

                          <button
                            onClick={() =>
                              startEdit(stu)
                            }
                            className="edit-btn"
                          >
                            ✏️ Edit
                          </button>


                          <button
                            onClick={() =>
                              deleteStudent(stu.sId)
                            }
                            className="delete-btn"
                          >
                            🗑️ Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <footer>

          <p>
            Student Management System
          </p>

          <span>
            React • Spring Boot • MySQL
          </span>

        </footer>

      </main>

    </div>

  );
}

export default App;