module.exports = (template, obj) => {
  let output = template.replace(/{%NO%}/g, obj.no);
  output = output.replace(/{%FIRST%}/g, obj.name.first);
  output = output.replace(/{%USERNAME%}/g, `${obj.name.first} ${obj.name.last}`);
  output = output.replace(/{%EMAIL%}/g, obj.email);
  output = output.replace(/{%AGE%}/g, obj.dob.age);
  output = output.replace(/{%PHONE%}/g, obj.phone);
  output = output.replace(/{%THUMBNAIL%}/g, obj.picture.thumbnail);
  output = output.replace(/{%LOCATION%}/g, `${obj.location.country}, ${obj.location.state}, ${obj.location.city}`);
  output = output.replace(/{%GENDER%}/g, obj.gender);

  return output;
};
