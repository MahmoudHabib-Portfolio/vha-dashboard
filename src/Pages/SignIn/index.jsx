import { Link } from "react-router-dom";
import { loginBackground, vhaLogo } from "../../assets";
import { FacebookIcon, GoogleIcon, LinkedidIcon, EmailIcon, PassLock } from "../../assets/icons";
import { Button } from "@mui/material";
import { InputAdornment, TextField } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";

/* Email Field */
const EmailField = styled(TextField)({
  '& .MuiInput-underline:after': {
  borderBottomColor: '#D9D9D9',
},
'& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderRadius: "12px",
    borderWidth: '2px'
  },
  '&:hover fieldset': {
    borderColor: '#D9D9D9',
    borderWidth: '2px'
  },
  '&.Mui-focused fieldset': {
    borderColor: '#D9D9D9',
    borderWidth: '2px'
  }
},
});

/* Pass Field */
const PassField = styled(TextField)({
  '& .MuiInput-underline:after': {
  borderBottomColor: '#D9D9D9',
},
'& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderRadius: "12px",
    borderWidth: '2px'
  },
  '&:hover fieldset': {
    borderColor: '#D9D9D9',
    borderWidth: '2px'
  },
  '&.Mui-focused fieldset': {
    borderColor: '#D9D9D9',
    borderWidth: '2px'
  }
},
});

const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(true);

  const mainStyle = {
    backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    height: "100%",
    padding:"2.5rem 1rem",
  }

  const submitLogin = (e) => {
    e.preventDefault();

  }

  return (
    <div style={mainStyle} className="flex flex-col gap-y-8 relative w-full">
          <div className="flex flex-row px-20 gap-x-10 w-full md:px-10">
              <div>
                  <Link to="/">
                    <img src={vhaLogo} width={"104"} height={"32"} alt="Logo" />
                  </Link>
              </div>
              <div className="text-primaryC font-poppins text-sm cursor-pointer tracking-wide leading-8">
                  Chemist
              </div>
              <div className="text-primaryC font-poppins text-sm cursor-pointer tracking-wide leading-8">
                  Doctors
              </div>
          </div>
      {/* Login_Form */}
      <div className="flex flex-row justify-end pr-24 w-full xl:pr-2 md:justify-center md:pr-0">
      <div className="bg-primaryC w-4/12 rounded-xl px-14 py-6 lg:w-4/5 xl:px-4">
            {/* Login */}
            <div className="text-center tracking-wider text-formHeadC text-2xl font-poppins font-bold w-full">
                Login
            </div>
            <div className="flex flex-row gap-x-2 justify-center py-6 w-full">
                <div className="bg-socbg p-2 text-center cursor-pointer rounded-lg">
                    <LinkedidIcon />
                </div>
                <div className="bg-socbg p-2 text-center cursor-pointer rounded-lg">
                    <FacebookIcon />
                </div>
                <div className="bg-socbg p-2 text-center cursor-pointer rounded-lg">
                    <GoogleIcon />
                </div>
            </div>
            <div className="pb-2 text-center font-poppins w-full">
              or
            </div>
            {/* loginForm */}
            <div className="block w-full">
              <form onSubmit={submitLogin}>
                <div className="flex flex-col gap-y-4 w-full">
                  <div>
                  <EmailField
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root":{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderStyle: "solid",
                        textAlign: "right",
                        borderColor: '#D9D9D9',
                        borderRadius: "12px"
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: "#D9D9D9"
                    },
                    }
                  }} 
                  inputProps={{
                    sx: {
                    color: '#1C1C1E',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textAlign: "left",
                    fontWeight:"normal",
                    backgroundColor:'transparent',
                    padding:'16px 8px',
                    borderRadius: "12px",
                    "&::placeholder":{
                        opacity: 1,
                        color: '#1C1C1E',
                        }
                    },
                    }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"email address"}
                    type="text"
                    />
                  </div>
                  <div>
                  <PassField
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root":{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderStyle: "solid",
                        textAlign: "right",
                        borderColor: '#D9D9D9',
                        borderRadius: "12px"
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: "#D9D9D9"
                    },
                    }
                  }} 
                  inputProps={{
                    sx: {
                    color: '#1C1C1E',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textAlign: "left",
                    fontWeight:"normal",
                    backgroundColor:'transparent',
                    padding:'16px 8px',
                    borderRadius: "12px",
                    "&::placeholder":{
                        opacity: 1,
                        color: '#1C1C1E',
                        }
                    },
                    }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                      <PassLock />
                    </InputAdornment>
                    }}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder={"enter password"}
                    type="password"
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <FormControlLabel 
                        value={check}
                        control={<Checkbox disableRipple={true} 
                        onChange={(e) => setCheck(e.target.checked)} 
                        sx={{
                          "&.MuiCheckbox-root":{
                            padding: "5px",
                            bottom: "0px",
                            border:"#A1A3AB"
                          },
                          "&.Mui-checked":{
                            color: "#009D92"
                          }
                        }}
                        />}
                        label={<span className="font-poppins text-sm tracking-wider sm:text-xs">Remeber Me</span>}
                        labelPlacement="end"
                      />
                    </div>
                    <div className="text-sm capitalize font-poppins pt-2 font-semibold text-formHeadC tracking-wider sm:text-xs">
                      <Link to={"#"}>
                        forget password?
                      </Link>
                    </div>
                  </div>
                  {/* submit-Form */}
                  <div className="py-3 w-full">
                    <Button
                    sx={{
                      background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
                      padding: "12px 8px",
                      letterSpacing:"1px",
                      fontWeight:"600",
                      width:"100%",
                      borderRadius:"8px",
                      color:"#fff",
                      "&:hover":{
                        background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
                      }
                    }}>
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            {/* loginFooter */}
            <div className="flex flex-row gap-x-3 pt-2 justify-center w-full">
                <div className="text-sm font-poppins tracking-wider sm:text-xs">
                  Don’t Have An Account?
                </div>
                <div className="text-sm font-poppins font-semibold text-formHeadC tracking-wider sm:text-xs">
                  <Link to={"/register"}>
                    Signup
                  </Link>
                </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default SignIn;