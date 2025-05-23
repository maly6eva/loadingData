function About() {
  return (
    <div className="prose lg:prose-xl">
      {/* Заголовки */}
      <h1 className="text-shadow-xl">About Our E-commerce Platform</h1>
      <h2>Our Vision</h2>
      <h3>How We Started</h3>
      <h4>Key Milestones</h4>
      <h5>Smaller Heading Example</h5>
      <h6>Even Smaller Heading Example</h6>

      {/* Абзацы */}
      <p>
        Welcome to our e-commerce platform! We are dedicated to providing the best online shopping
        experience. With a wide range of products, competitive pricing, and exceptional customer
        service, we strive to make your shopping journey as seamless as possible.
      </p>
      <p>
        Our mission is to connect customers with products they love, from trusted sellers around the
        world. Whether  looking for the latest gadgets, fashion, or home essentials, got
        you covered.
      </p>

      {/* Списки */}
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of products</li>
        <li>Competitive prices</li>
        <li>Fast and reliable shipping</li>
        <li>Excellent customer support</li>
      </ul>

      <h3>Our Key Features:</h3>
      <ol>
        <li>User-friendly interface</li>
        <li>Secure payment options</li>
        <li>Real-time order tracking</li>
      </ol>

      {/* Блок цитат */}
        <blockquote>
            Jean-Paul Agon
        </blockquote>

      {/* Кодовые блоки */}
      <h3>Example Code Block</h3>
      <pre>
        <code>
          {`function Shop() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <p>Find your favorite products here.</p>
    </div>
  );
}`}
        </code>
      </pre>

      {/* Ссылки */}
      <h3>Learn More</h3>
      <p>
        Check out our <a href="https://www.example.com">official website</a> for more information
        about our services.
      </p>

      {/* Изображения */}
      <h3>Our Happy Customers</h3>
      <img src="https://via.placeholder.com/400x200" alt="Happy customers" />
      <p>Join thousands of happy customers who trust us with their shopping needs.</p>
    </div>
  );
}

export default About;
