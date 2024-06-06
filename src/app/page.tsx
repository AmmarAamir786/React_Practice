import Mybutton from "@/components/Mybutton"
import Link from "next/link"

export default function Home() {
  return (
    <main className='grid-cols-3 grid container mx-auto min-h-screen items-center'>


      <Link href={"/useState"}>
        <div className="flex justify-center items-center">
          <Mybutton title="useState"></Mybutton>
        </div>
      </Link>

      <Link href={"/useReducer"}>
        <div className="flex justify-center items-center">
          <Mybutton title="useReducer"></Mybutton>
        </div>
      </Link>

      <Link href={"/useEffect"}>
        <div className="flex justify-center items-center">
          <Mybutton title="useEffect"></Mybutton>
        </div>
      </Link>

      <Link href={"/arrayOfObjects"}>
        <div className="flex justify-center items-center">
          <Mybutton title="arrayOfObjects"></Mybutton>
        </div>
      </Link>

      <Link href={"/colorPicker"}>
        <div className="flex justify-center items-center">
          <Mybutton title="colorPicker"></Mybutton>
        </div>
      </Link>
      
      <Link href={"/onChange"}>
        <div className="flex justify-center items-center">
          <Mybutton title="onChange"></Mybutton>
        </div>
      </Link>

      <Link href={"/onChangeList"}>
        <div className="flex justify-center items-center">
          <Mybutton title="onChangeList"></Mybutton>
        </div>
      </Link>

      <Link href={"/onChangeObj"}>
        <div className="flex justify-center items-center">
          <Mybutton title="onChangeObj"></Mybutton>
        </div>
      </Link>

      <Link href={"/toDoApp"}>
        <div className="flex justify-center items-center">
          <Mybutton title="toDoApp"></Mybutton>
        </div>
      </Link>
      

    </main>

  )
}
