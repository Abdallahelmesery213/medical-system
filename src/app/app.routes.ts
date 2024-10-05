import { Routes } from '@angular/router';
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { NewInvoiceComponent } from './demo/components/task/new-invoice/new-invoice.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'invoice', component: NewInvoiceComponent },
    // { path: 'button', component: ButtonModule, data: { breadcrumb: 'Button' } },
    // { path: 'charts', data: { breadcrumb: 'Charts' }},
    // { path: 'file', data: { breadcrumb: 'File' },  },
    // { path: 'floatlabel', data: { breadcrumb: 'Float Label' },  },
    // { path: 'formlayout', data: { breadcrumb: 'Form Layout' },  },
    // { path: 'input', data: { breadcrumb: 'Input' },  },
    // { path: 'invalidstate', data: { breadcrumb: 'Invalid State' },  },
    // { path: 'list', data: { breadcrumb: 'List' },  },
    // { path: 'media', data: { breadcrumb: 'Media' },  },
    // { path: 'message', data: { breadcrumb: 'Message' },  },
    // { path: 'misc', data: { breadcrumb: 'Misc' },  },
    // { path: 'overlay', data: { breadcrumb: 'Overlay' } },
    // { path: 'panel', data: { breadcrumb: 'Panel' },  },
    // { path: 'table', data: { breadcrumb: 'Table' },  },
    // { path: 'tree', data: { breadcrumb: 'Tree' },  },
    // { path: 'menu', data: { breadcrumb: 'Menu' },  },
    // { path: '**', redirectTo: '/notfound' }
];
