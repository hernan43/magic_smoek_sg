import React from 'react'
import { 
  Form, 
  FormProps,
  Layout,
  TextField,
  TextFieldProps,
  TextArea,
  TextAreaProps,
  Checkbox,
  CheckboxProps,
  SubmitButton,
  SubmitButtonProps
} from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'
import { useAppSelector } from '@javascript/store'

type ContentProps = {
  projectsPath: string
  projectForm: FormProps<{
    name: TextFieldProps
    description: TextAreaProps
    isPublic: CheckboxProps
    submit: SubmitButtonProps
  }>
}

export default function ProjectsNew() {
  const {
    projectForm,
    projectsPath,
  } = useContent<ContentProps>()
  const { 
    inputs, 
    form, 
    extras 
  } = projectForm
  const validationErrors = useAppSelector((state) => state.flash["projectFormErrors"])

  return (
    <Layout>
      <Form {...form} extras={extras} validationErrors={validationErrors} data-sg-visit>
        <TextField {...inputs.name} label="Name" errorKey="name" />
        <TextArea {...inputs.description} label="Description" errorKey="description" />
        <Checkbox {...inputs.isPublic} label="Is public" errorKey="is_public" />
        <SubmitButton {...inputs.submit} type="submit"> {inputs.submit.text} </SubmitButton>
      </Form>

      <a href={projectsPath} data-sg-visit>Back</a>
    </Layout>
  )
}
