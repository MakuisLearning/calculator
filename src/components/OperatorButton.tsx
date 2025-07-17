import type { Dispatch } from "react"

const ACTIONS = {
  CHOOSE_OPERATION: "CHOOSE_OPERATION",
} as const

type ACTION = { type: typeof ACTIONS.CHOOSE_OPERATION; payload: string }

type OperatorButtonType = {
  text: string
  dispatch: Dispatch<ACTION>
}

export const OperatorButton = ({ text, dispatch }: OperatorButtonType) => {
  return (
    <button
      className={`btn w-full h-full btn-warning`}
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: text })
      }}
    >
      {text}
    </button>
  )
}
