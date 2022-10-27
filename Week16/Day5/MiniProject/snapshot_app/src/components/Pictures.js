import { connect } from "react-redux";

const Pictures = (props) => {
  console.log(props);
  return (
    <>
      {props.pictures.map((picture, index) => {
        return (
          <div key={index}>
            <img src={picture.url} alt={picture.alt} />
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
