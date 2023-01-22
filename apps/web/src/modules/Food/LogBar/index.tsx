import React from 'react';

import { Container, Menu, CreateButton } from './styles';

export interface LogBarProps {
  units: {
    id: string;
    name: string;
    short: string;
    default_amount: number;
  }[]
}

const LogBar: React.FC<LogBarProps> = ({units}: LogBarProps) => {

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
          <CreateButton>LOG IT</CreateButton>
        </Menu>
      </div>
    </Container>
  )
}

export default LogBar;