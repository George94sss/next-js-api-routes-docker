// import useSWR from "swr";
// import PersonComponent from "../components/Person";
// import { Person } from "../interfaces";
// import "../styles/global.css";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  // const { data, error } = useSWR("/api/people", fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
