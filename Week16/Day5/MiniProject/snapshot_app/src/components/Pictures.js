import { connect } from "react-redux";

const Pictures = (props) => {
  return (
    <>
      {props.pictures.map((picture, index) => {
        return (
          <div key={index} style={{ display: "inline-block" }}>
            <img
              src={picture.src.original}
              alt={picture.alt}
              style={{ width: "100px" }}
            />
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { pictures: state.pictures };
};

export default connect(mapStateToProps)(Pictures);
