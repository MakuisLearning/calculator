import type { Dispatch } from "react"

const ACTIONS = {
  ADD_DIGIT: "ADD_DIGIT",
} as const

type ACTION = { type: typeof ACTIONS.ADD_DIGIT; payload: string }

type DigitButtonType = {
  text: string
  dispatch: Dispatch<ACTION>
}
export const DigitButton = ({ text, dispatch }: DigitButtonType) => {
  return (
    <button
      className={`btn w-full h-full btn-primary`}
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: text })
      }}
    >
      {text}
    </button>
  )
}
