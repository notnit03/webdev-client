export default function ImageTags() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      An image that matters to me:
      <br />
      <img
        id="wd-your-image"
        src="/images/neu.jpg"
        width="300px"
        alt="Northeastern University campus entrance"
      />
      <br />
      One more sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://apod.nasa.gov/apod/image/2407/Crab_MultiChandra_960.jpg"
        width="200px"
        alt="The Crab Nebula in multiwavelength light"
      />
    </div>
  );
}