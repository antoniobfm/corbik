import React from 'react';

import { Container, Menu, ConfirmActionButton, UpdateActionButton } from './styles';

export interface LogBarProps {
  type: 'create' | 'update';
  units: {
    id: string;
    name: string;
    short: string;
    default_amount: number;
  }[]
}

const LogBar: React.FC<LogBarProps> = ({ units, type }: LogBarProps) => {
  return (
    <Container>
      <div>
        <Menu>
          <div className="amount">
            <input
              type="number"
              placeholder="Amount"
              defaultValue={units[0].default_amount}
              min={0}
              step="0.01"
            />
          </div>
          <div className="unit">
            <select name="select" id="select_amount">
              {units.map((unit) => (
                <option value={unit.id}>{unit.name}s</option>
              ))}
            </select>
          </div>
          {type === 'create' && (
            <ConfirmActionButton>LOG IT</ConfirmActionButton>
          )}
          {type === 'update' && (
            <UpdateActionButton>UPDATE</UpdateActionButton>
          )}
        </Menu>
      </div>
    </Container>
  )
}

export default LogBar;