export const VIDEO_CALL_ZOOM = "zoom";
export const VIDEO_CALL_MESSENGER = "messenger";
export const VIDEO_CALL_GMEET = "gmeet";
export const VIDEO_CALL_WHATSAPP = "whatsapp";
export const VIDEO_CALL_VIBER = "viber";

export const videoApps = [
  VIDEO_CALL_ZOOM,
  VIDEO_CALL_MESSENGER,
  VIDEO_CALL_GMEET,
  VIDEO_CALL_WHATSAPP,
  VIDEO_CALL_VIBER,
];

export const videoAppsValidation = (schema) => ({
  [VIDEO_CALL_ZOOM]: {
    placeholder: "Zoom Email",
    schema:
      schema &&
      schema
        .email("Please enter a valid email")
        .required("Contact info is a required field"),
  },
  [VIDEO_CALL_MESSENGER]: {
    placeholder: "Messenger / FB Link",
    schema:
      schema &&
      schema
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Please enter the URL to your Facebook account (e.g. facebook.com/username)"
        )
        .required("Contact info is a required field"),
  },
  [VIDEO_CALL_GMEET]: {
    placeholder: "Email for Google Meet",
    schema:
      schema &&
      schema
        .email("Please enter a valid email")
        .required("Contact info is a required field"),
  },
  [VIDEO_CALL_WHATSAPP]: {
    placeholder: "Whatsapp Number",
    schema:
      schema &&
      schema
        .matches(
          /^\+639\d{9}$/,
          "Please follow the correct format: +639171234567"
        )
        .required("Contact info is a required field"),
  },
  [VIDEO_CALL_VIBER]: {
    placeholder: "Viber Number",
    schema:
      schema &&
      schema
        .matches(
          /^\+639\d{9}$/,
          "Please follow the correct format: +639171234567"
        )
        .required("Contact info is a required field"),
  },
});

export const videoAppSchema = (contact_type, schema) => {
  return videoAppsValidation(schema)[contact_type].schema;
};