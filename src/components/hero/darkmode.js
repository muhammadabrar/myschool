import { mode} from '../../store/theme'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillMoonStarsFill, BsFillEmojiSunglassesFill } from 'react-icons/bs'
import {
  LightFilled32,
  AsleepFilled32,
} from "@carbon/icons-react";
function Darkmode() {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    console.log(theme)
  return (

    <>
    <div className="nav-btn">
              <button
                className={`btn-icon shadow ${!theme ? "bg-dark": "bg-light"}`}
                onClick={()=> dispatch(mode())} 
                data-toggle="popover"
                aria-label="Settings"
                data-cooltipz-dir="bottom"
              >
                {theme ? <LightFilled32 style={{color: "orange"}} className="sun" />:
                <AsleepFilled32 />}
              </button>
            </div>

    {/* <input type="checkbox" onClick={()=> dispatch(mode())} checked={theme} class="checkbox" id="night-mode"/>
    <label for="night-mode" class="label">
    <BsFillEmojiSunglassesFill className="sun" />
       <BsFillMoonStarsFill className="moon" />
       

        <div class="blob"></div>
    </label> */}
    </>
  );
}
export default Darkmode;