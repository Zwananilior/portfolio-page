interface Props {
  id: string;
  title: string;
}

const Section = ({ id, title }: Props) => {
  return (
    <section id={id} className="scroll-mt-24 min-h-screen flex items-center justify-center">
      <h2 className="text-4xl text-primary">{title} Section</h2>
    </section>
  );
};

export default Section;
