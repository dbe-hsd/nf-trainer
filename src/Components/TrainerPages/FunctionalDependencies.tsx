import React, { useState } from 'react'
import tasks from '../../data'
import { Redirect, useParams } from 'react-router-dom'
import Table from '../Subcomponents/Table'
import AssociationResponseHandler from '../Subcomponents/AssociationResponseHandler'
import PrevNextNavigation from '../Subcomponents/PrevNextNavigation'

export default function FunctionalDependencies () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const [message, setMessage] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  const taskKeys = Object.keys(task.tableData[0])
  const functionalDependencies = task.functionalDependencies

  function handleResponse (response: boolean) {
    if (response) {
      setMessage('Korrekt!')
      setIsEnabled(true)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Funktionale Abhängigkeiten</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <p className="text-center">Bestimmen Sie alle funktionalen Abhängigkeiten!</p>
      <AssociationResponseHandler keys={taskKeys} associationsSolutions={functionalDependencies} responseHandler={handleResponse} />
      <p className="text-l font-bold text-center">{message}</p>
      <PrevNextNavigation prev={`/tasks/${id}/firstNormalForm`} next={`/tasks/${id}/primaryKeys`} nextIsEnabled={isEnabled} />
    </div>
  )
}

interface ParamTypes {
  id: string
}
