
const Card = ({ children, id }) => {
  return (
    <div id={id}>
      <figure className="px-[12%] pt-[12%] pb-[32%] rounded-md backdrop-blur-sm border border-[#363636] bg-[#272727]/30">{children}</figure>
    </div>
  );
};

export default Card;
