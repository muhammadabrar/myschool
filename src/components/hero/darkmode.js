import { mode} from '../../store/theme'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillMoonStarsFill, BsFillEmojiSunglassesFill } from 'react-icons/bs'

function Darkmode() {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    console.log(theme)
  return (

    <>
    <input type="checkbox" onClick={()=> dispatch(mode())} checked={theme} class="checkbox" id="night-mode"/>
    <label for="night-mode" class="label">
    <BsFillEmojiSunglassesFill className="sun" />
       <BsFillMoonStarsFill className="moon" />
       

        <div class="blob"></div>
    </label>
    </>
  );
}
export default Darkmode;