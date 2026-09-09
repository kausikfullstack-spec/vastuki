export function Process() {
  return (
    <section id="process" className="section-shell process-section">
      <div className="section-top">
        <div>
          <div className="eyebrow">
            <span /> FROM AN IDEA TO YOUR EVERYDAY
          </div>
          <h2>
            A thoughtful journey.
            <br />
            <em>A beautiful destination.</em>
          </h2>
        </div>
        <p>
          Good design begins with a conversation.
          <br />
          Here’s how we bring yours to life.
        </p>
      </div>
      <div className="process-grid">
        {[
          [
            "01",
            "We listen",
            "Your routines, your inspirations, your wish list. We start by getting to know you.",
          ],
          [
            "02",
            "We imagine",
            "Layouts, materials and a clear design direction turn your ideas into a shared vision.",
          ],
          [
            "03",
            "We create",
            "Our design comes to life through careful coordination and considered craftsmanship.",
          ],
          [
            "04",
            "You make it home",
            "The final details fall into place. Your space is ready for the stories still to come.",
          ],
        ].map(([number, title, copy]) => (
          <div key={number}>
            <span className="process-number">{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
