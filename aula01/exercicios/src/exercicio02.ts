function Message() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  return (
    <div>
      {hours < 12 ? (
        "Bom dia!"
      ) : hours < 18 ? (
        "Boa tarde!"
      ) : (
        "Boa noite!"
      )}
    </div>
  );
}