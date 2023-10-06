import styled from "styled-components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../store/store";
import { createSong } from "../store/features/songs";

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
  color: white;
`;

const Button = styled.button`
  background-color: #121212;
  outline: none;
  border: 1px solid #a4a4a4;
  color: white;
`;

const P = styled.p`
  color: red;
`;

const schema = z.object({
  artistName: z
    .string()
    .min(8, { message: "artist name should be at least 8 character" }),
  songName: z
    .string()
    .min(5, { message: "song name should be at least 5 character" }),
  imageUrl: z
    .string()
});

type SongFormData = z.infer<typeof schema>;

export const SongCreateForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SongFormData>({ resolver: zodResolver(schema) });

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        dispatch(createSong(data));
        reset();
      })}
    >
      <Label>
        Artist Name
        <Input {...register("artistName")} type="text" />
        {errors.artistName && <P>{errors.artistName.message}</P>}
      </Label>
      <Label>
        Song Name <Input {...register("songName")} type="text" />
        {errors.songName && <P>{errors.songName.message}</P>}
      </Label>
      <Label>
        Image Url
        <Input {...register("imageUrl")} type="text" />
        {errors.imageUrl && <P>{errors.imageUrl.message}</P>}
      </Label>
      <Button type="submit">Create Song</Button>
    </Form>
  );
};
