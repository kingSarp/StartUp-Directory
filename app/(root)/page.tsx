import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Start Up <br />
        connect with Investors{" "}
      </h1>
      <p className="sub-heading">
        Welcome to our platform where you can pitch your startup idea to
        potential investors and partners. Share your vision, showcase your
        innovation, and connect with like-minded individuals who can help bring
        your startup to life.
      </p>
      <SearchForm />
    </section>
  );
}
