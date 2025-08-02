const useCertificationModal = ({ certifications, selectedCert, setSelectedCert }) => {
  const handleOpen = (index) => setSelectedCert(index);
  const handleClose = () => setSelectedCert(null);
  const handlePrev = () => setSelectedCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  const handleNext = () => setSelectedCert((prev) => (prev + 1) % certifications.length);

  return {
    selectedCert,
    handleOpen,
    handleClose,
    handlePrev,
    handleNext
  };
};

export default useCertificationModal;