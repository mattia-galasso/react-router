import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="container py-5">
        <div class="card border-info mb-3" id="aboutUsBox">
          <h5 class="card-header card-title text-center">About Us</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              saepe nostrum, cumque consectetur animi qui quas voluptate, sunt
              ea autem laborum mollitia, sapiente eveniet libero odio magnam!
              Officia, modi reiciendis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
