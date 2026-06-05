export default function handler(req, res) {
  const { licenseKey } = req.query;

  const licenses = {
    "JMW-001": {
      active: true,
      expiryDate: "2026-08-06"
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
