import { InputField } from "./InputField"
import backspaceIcon from "../assets/backspace.svg"
import { DigitButton } from "./DigitButton"
import { OperatorButton } from "./OperatorButton"
import { useReducer } from "react"

type REDUCER_STATE_TYPE = {
  currentValue: string
  prevValue: string
  operator: string
}

const evaluate = ({
  currentValue,
  prevValue,
  operator,
}: REDUCER_STATE_TYPE): number => {
  const curr: number = parseFloat(currentValue)
  const prev: number = parseFloat(prevValue)

  switch (operator) {
    case "+":
      return prev + curr
    case "-":
      return prev - curr
    case "*":
      return prev * curr
    case "/":
      return prev / curr
    default:
      return 0
  }
}

const ACTIONS = {
  ADD_DIGIT: "ADD_DIGIT",
  CHOOSE_OPERATION: "CHOOSE_OPERATION",
  CLEAR: "CLEAR",
  DELETE_DIGIT: "DELETE_DIGIT",
  EVALUATE: "EVALUATE",
} as const

type ACTION =
  | { type: typeof ACTIONS.ADD_DIGIT; payload: string }
  | { type: typeof ACTIONS.CHOOSE_OPERATION; payload: string }
  | { type: typeof ACTIONS.CLEAR }
  | { type: typeof ACTIONS.DELETE_DIGIT }
  | { type: typeof ACTIONS.EVALUATE }

const reducer = (
  state: REDUCER_STATE_TYPE,
  action: ACTION
): REDUCER_STATE_TYPE => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.currentValue === "0" && action.payload === "0") return state

      if (state.currentValue.includes(".") && action.payload === ".")
        return state

      return {
        ...state,
        currentValue: `${state.currentValue || ""}${action.payload}`,
      }

    case ACTIONS.CLEAR:
      return {
        ...state,
        currentValue: "",
        prevValue: "",
        operator: "",
      }

    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (
        (state.currentValue === "0" || state.currentValue === "") &&
        state.prevValue === ""
      ) {
        return state
      }

      if (state.currentValue === ".") return state

      if (state.operator !== "" && state.currentValue !== "") {
        return {
          ...state,
          prevValue: evaluate(state).toString(),
          currentValue: "",
          operator: action.payload,
        }
      }

      if (state.currentValue === "") {
        return {
          ...state,
          operator: action.payload,
        }
      }

      return {
        ...state,
        currentValue: "",
        prevValue: state.currentValue,
        operator: action.payload,
      }

    case ACTIONS.EVALUATE:
      if (state.prevValue !== "" && state.currentValue === "") {
        return {
          ...state,
          prevValue: evaluate({
            currentValue: state.prevValue,
            prevValue: state.prevValue,
            operator: state.operator,
          }).toString(),
        }
      }

      return {
        ...state,
        currentValue: evaluate(state).toString(),
        prevValue: "",
        operator: "",
      }

    default:
      return state
  }
}
const initialState: REDUCER_STATE_TYPE = {
  currentValue: "",
  prevValue: "",
  operator: "",
}

export const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-base-200 p-2 w-fit card border-solid border-2 border-accent-content">
      <InputField
        text={state.currentValue}
        prevText={state.prevValue}
        operator={state.operator}
      />

      <div className="grid grid-cols-50px-4 grid-rows-50px-5 gap-1 mb-1 mt-2">
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.CLEAR })
          }}
          className=" btn w-full h-full btn-secondary col-span-2"
        >
          AC
        </button>

        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_DIGIT })
          }}
          className=" btn w-full h-full btn-secondary"
        >
          <img src={backspaceIcon} alt="backspace" />
        </button>
        <OperatorButton text="/" dispatch={dispatch} />
        <DigitButton text="7" dispatch={dispatch} />
        <DigitButton text="8" dispatch={dispatch} />
        <DigitButton text="9" dispatch={dispatch} />
        <OperatorButton text="*" dispatch={dispatch} />
        <DigitButton text="4" dispatch={dispatch} />
        <DigitButton text="5" dispatch={dispatch} />
        <DigitButton text="6" dispatch={dispatch} />
        <OperatorButton text="-" dispatch={dispatch} />
        <DigitButton text="1" dispatch={dispatch} />
        <DigitButton text="2" dispatch={dispatch} />
        <DigitButton text="3" dispatch={dispatch} />
        <OperatorButton text="+" dispatch={dispatch} />
        <DigitButton text="." dispatch={dispatch} />
        <DigitButton text="0" dispatch={dispatch} />
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE })
          }}
          className=" btn w-full h-full btn-warning col-span-2"
        >
          =
        </button>
      </div>
    </div>
  )
}
