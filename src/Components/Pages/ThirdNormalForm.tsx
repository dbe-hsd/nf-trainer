import React, { useEffect, useState } from 'react'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import TableGrid from '../UI/TableGrid'
import FeedbackElement from '../UI/FeedbackElement'
import { Task } from '../../Types/Task'
import { useNavigate } from 'react-router-dom'

interface Props {
  selectedTask: Task | undefined
  isLoading: boolean
}

export default function ThirdNormalForm({ selectedTask, isLoading }: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate back to selection if the task is neither selected nor loading
    if (!isLoading && !selectedTask) {
      navigate('/trainer/')
    }
  }, [isLoading, selectedTask])

  // // Task Variables
  // const taskKeys = Object.keys(task.tableData[0])
  // const associations = task.thirdNormalFormSolutions

  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function handleResponse(response: boolean) {
    if (response) {
      setIsCorrect(true)
      setCanNavigate(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <>
      {isLoading || !selectedTask ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {/* Task description */}
          <TrainerHeader>{selectedTask.title} - Dritte Normalform</TrainerHeader>
          <TrainerTaskDescription>
            {selectedTask.description}
          </TrainerTaskDescription>
          <TableGrid
            gridData={selectedTask.secondFormTableData}
            primaryKeys={selectedTask.primaryKeys}
          />
          <TrainerSubtaskDescription>
            Bringen Sie das Schema in die dritte Normalform, indem Sie auf die
            entsprechenden Spalten (Primärschlüssel und abhängige Spalten)
            klicken. Auch ohne Veränderung einer Tabelle müssen die Beziehungen angegeben werden.
          </TrainerSubtaskDescription>

          {/* Task-specific response handler */}
          <AssociationResponseHandler
            keys={Object.keys(selectedTask.tableData[0])}
            associationsSolutions={selectedTask.thirdNormalFormSolutions}
            responseHandler={handleResponse}
            disabled={canNavigate}
          />

          {/* Feedback */}
          {isCorrect !== undefined && <FeedbackElement isCorrect={isCorrect} />}

          <HintContainer
            functionalDependencies={selectedTask.functionalDependencies}
            primaryKeys={selectedTask.primaryKeys}
          />

          {/* Solution container */}
          {isCorrect !== undefined && (
            <SampleSolution onClick={() => setCanNavigate(true)}>
              {selectedTask.thirdNormalFormSolutions.map(
                (dependency, index) => {
                  const dependencyString = `${dependency.primaryKeys.join(
                    ', '
                  )} ➔ ${dependency.columns.join(', ')}`
                  return <p key={index}>{dependencyString}</p>
                }
              )}
              { selectedTask.thirdNormalFormExplanation &&
                <div>
                  <h3 className='font-bold'>Begründung:</h3>
                  <p>{selectedTask.thirdNormalFormExplanation}</p>
                </div>
              }
            </SampleSolution>
          )}

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/checkThirdNormalForm`}
            next={'/trainer/done'}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}
