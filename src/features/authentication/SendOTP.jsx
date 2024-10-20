function SendOTP() {
  return (
    <div>
      <h1>شماره همراه خود را وارد کنید</h1>
      <form action="submit">
        <input type="text" placeholder="شماره همراه" />
        <button>ورود</button>
      </form>
    </div>
  );
}

export default SendOTP;
