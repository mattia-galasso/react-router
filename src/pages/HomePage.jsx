import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="homepage-box">
        <div className="container py-5">
          <div id="welcome-box">
            <h1 className="text-center welcome-text">Benvenuto 👋🏻</h1>
          </div>
        </div>
      </main>
    </>
  );
}
