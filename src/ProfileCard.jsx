function ProfileCard({ title, handle, image }) {
  //   const { title, handle } = props;
  //   const title = props.title;
  //   const handle = props.handle;

  return (
    <div>
      <img src={image} alt="PDA Logo"></img>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
