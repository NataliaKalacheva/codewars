// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  let maskedSubStr = cc
    .slice(0, cc.length - 4)
    .split("")
    .map((item) => (item = "#"))
    .join("");
  let showSubStr = cc.slice(cc.length - 4);

  return maskedSubStr + showSubStr;
}
