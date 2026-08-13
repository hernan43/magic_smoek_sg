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
import { RichTextField, RichTextFieldProps } from '@javascript/components/RichTextField'
import { useContent } from '@thoughtbot/superglue'
import { useAppSelector } from '@javascript/store'

type ContentProps = {
  dashboardPath: string
  projectForm: FormProps<{
    name: TextFieldProps
    description: TextAreaProps
    isPublic: CheckboxProps
    submit: SubmitButtonProps
  }>
}

export default function ProjectsEdit() {
  const { projectForm, dashboardPath } = useContent<ContentProps>()
  const { inputs, form, extras } = projectForm
  const validationErrors = useAppSelector((state) => state.flash['projectFormErrors'])

  return (
    <Layout>
      <div className="container py-5" style={{ maxWidth: '560px' }}>
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h1 className="h4 mb-4">Edit Project</h1>

            <Form {...form} extras={extras} validationErrors={validationErrors} data-sg-visit>
              <TextField {...inputs.name} label="Name" errorKey="name" />
              <TextArea {...inputs.description} label="Description" errorKey="description" rows={4} />
              <Checkbox {...inputs.isPublic} label="Make it public?" errorKey="is_public" />

              <div className="d-flex justify-content-between align-items-center mt-4">
                <a href={dashboardPath} data-sg-visit className="btn btn-link ps-0">
                  back to dashboard
                </a>
                <SubmitButton {...inputs.submit} className="btn btn-primary">
                  {inputs.submit.text}
                </SubmitButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  )
}