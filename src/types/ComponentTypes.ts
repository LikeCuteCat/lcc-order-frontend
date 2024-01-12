import { Category } from './dataTypes';

export interface CategoryButtonType {
  isActive: boolean;
  onClickHandler: () => void;
  data?: Category;
}
