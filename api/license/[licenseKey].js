export default function handler(req, res) {
  const { licenseKey } = req.query;

  const licenses = {
    "JMW-001": {
      active: false,
      expiryDate: "2026-05-05"
    }
  };

  
  const license = licenses[licenseKey];

  if (!license) {
    return res.status(404).json({
      active: false,
      expiryDate: null
    });
  }

  return res.status(200).json(license);
}
