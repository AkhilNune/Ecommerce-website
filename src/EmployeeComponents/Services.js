import styled from "styled-components";
import { courses } from "../data";
import CoursesCategory from "../EmployeeComponents/CoursesCategory";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Services = () => {
  return (
    <Container>
      {courses.map((item) => (
        <CoursesCategory item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Services;