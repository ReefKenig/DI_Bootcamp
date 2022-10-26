import { connect } from "react-redux";

const Picture = props => {
  return (
    <div>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

export default Picture;
// export default connect(mapStateToProps, mapDispatchToProps)(Picture);