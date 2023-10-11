import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@prizm-ui/components';

interface ITranslator extends IBreadcrumb {
  prop: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public breadcrumbs: ITranslator[] = [
    {
      name: 'Дом',
      prop: 'Home',
    },
    {
      name: 'Крадущийся',
      prop: 'Crouching',
    },
    {
      name: 'Тигр',
      prop: 'Tiger',
    },
    {
      name: 'Затаившийся',
      prop: 'Hidden',
    },
    {
      name: 'Дракон',
      prop: 'Dragon',
    },
  ];
  public currentBreadcrumbName: string | number = '';

  public changeCrumbListener(breadcrumb: IBreadcrumb): void {
    this.currentBreadcrumbName = breadcrumb?.name;
  }
}
