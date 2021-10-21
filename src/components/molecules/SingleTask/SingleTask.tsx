import React, { useCallback } from 'react';
import { SingleTaskWrapper, StyledCheckbox, StyledInput } from './SingleTask.styles';

interface SingleTaskProps {
  isChecked: boolean;
  taskName: string;
  onTaskNameChanged(taskName: string): void;
  onCheckedChange(isChecked: boolean): void;
}
export const SingleTask = ({ isChecked, taskName, onTaskNameChanged, onCheckedChange }: SingleTaskProps) => {
  const handleCheckedChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onCheckedChange(e.target.checked), [onCheckedChange]);
  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onTaskNameChanged(e.target.value), [onTaskNameChanged]);

  return (
    <SingleTaskWrapper>
      <StyledCheckbox type="checkbox" name="isDone" checked={isChecked} onChange={handleCheckedChanged} />
      <StyledInput type="text" name="taskName" value={taskName} onChange={handleNameChange} />
    </SingleTaskWrapper>
  );
};
