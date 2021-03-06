import * as React from 'react';

interface IProps {
  checked?: boolean;
  onChanged?: (checked: boolean) => void;
  disabled?: boolean;
}

class Checkbox extends React.Component<IProps, {}> {
  public render() {
    return (
      <div>
        <input
          disabled={this.props.disabled || false}
          className="Checkbox"
          type="checkbox"
          checked={this.props.checked || false}
          onChange={(ev) => this.props.onChanged && this.props.onChanged(ev.target.checked)}
        />
      </div>
    );
  }
}

export default Checkbox;
