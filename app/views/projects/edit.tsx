import React from 'react'
import {
  Form,
  FormProps,
  Layout,
  TextField,
  TextFieldProps,
  FileField,
  FileFieldProps,
  Checkbox,
  CheckboxProps,
  SubmitButton,
  SubmitButtonProps
} from '@javascript/components'
import { RichTextField, RichTextFieldProps } from '@javascript/components/RichTextField'
import { useContent } from '@thoughtbot/superglue'
import { useAppSelector } from '@javascript/store'

type ContentProps = {
  projectPath: string
  projectsPath: string
  project: {
    name: string
    images: { id: number; url: string }[]
  }
  projectForm: FormProps<{
    name: TextFieldProps
    description: RichTextFieldProps
    images: FileFieldProps
    isPublic: CheckboxProps
    submit: SubmitButtonProps
  }>
}

export default function ProjectsEdit() {
  const { project, projectForm, projectPath } = useContent<ContentProps>()
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
              <RichTextField
                {...inputs.description}
                label="Description"
                errorKey="description"
                placeholder="Describe the project..."
              />

              {project.images.length > 0 && (
                <div className="mb-3">
                  <label className="form-label d-block">Current Images</label>
                  <div className="d-flex flex-wrap gap-3">
                    {project.images.map((image) => (
                      <div key={image.id} className="text-center" style={{ width: '100px' }}>
                        <img
                          src={image.url}
                          alt="Project thumbnail"
                          className="img-thumbnail mb-1"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <div className="form-check d-flex justify-content-center align-items-center gap-1">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`remove-image-${image.id}`}
                            name="project[images_to_remove][]"
                            value={image.id}
                          />
                          <label htmlFor={`remove-image-${image.id}`} className="form-check-label small text-danger">
                            Remove
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <FileField {...inputs.images} label="Add More Images" errorKey="images" multiple />
              
              <Checkbox {...inputs.isPublic} label="Make it public?" errorKey="is_public" />

              <div className="d-flex justify-content-between align-items-center mt-4">
                <a href={projectPath} data-sg-visit className="">
                  ⇜ back to {project.name}
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