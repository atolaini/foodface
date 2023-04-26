import { useState } from "react";

import Button from "@/components/buttons/button";
import Input from "@/components/forms/input";

export default function Home() {
  const [ingredientInput, setIngredientInput] = useState<{}[]>([])

  const addIngredientHandler = () => {
    setIngredientInput((prevState)=> (
      [...prevState, {ingredient: ""}]
    ))

    console.log(ingredientInput)
  }

  const removeIngredientHandler = (index: number) => {
    const list = [...ingredientInput]
    list.splice(index, 1);
    setIngredientInput(list);
  }

  return (
    <>
    <h1>Home Page</h1>
    <Input labelTxt="Ingredient" inputId="ingredient" htmlFor="ingredient" type="text" onClick={removeIngredientHandler}/>

    {ingredientInput.map((input, index) => (
      <Input key={index} type="text" labelTxt="Ingredient" inputId={`ingredient-${index}`} htmlFor={`ingredient-${index}`} onClick={removeIngredientHandler} />
    ))}

    <Button onClick={addIngredientHandler}>Add Ingredient</Button>
    </>
  )
}
