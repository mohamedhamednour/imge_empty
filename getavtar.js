export default (name, avatarSrc) => {
  const avatarElm = document.createElement("img");
  avatarElm.className = "avatar";

  avatarElm.src = avatarSrc;
  return avatarElm;
};
