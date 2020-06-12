const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };
  
  const withLayout = Page => {
    return () => (
      <div style={layoutStyle}>
        jgkljagklajsklgjl
      </div>
    );
  };
  const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);