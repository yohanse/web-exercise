import styled from "styled-components";

const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #121212;
  border-radius: 10px;
  gap: 10px;
`;

const Label = styled.label`
  color: #ffffff;
`;

const Input = styled.input`
  background-color: #121212;
  outline: none;
  border: 1px solid #a4a4a4;
`;

const Button = styled.button`
  background-color: #121212;
  outline: none;
  border: 1px solid #a4a4a4;
  color: white;
`;

export const SongCreateForm = () => {
  return (
    <Form>
      <Label>
        Artist Name
        <Input type="text" />{" "}
      </Label>
      <Label>
        Song Name <Input type="text" />{" "}
      </Label>
      <Label>
        Image Url
        <Input type="text" />{" "}
      </Label>
      <Button>Create Song</Button>
    </Form>
  );
};
