import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlockListComponent} from './block-list/block-list.component';
import {BlockPreviewComponent} from './block-preview/block-preview.component';
import {AddBlockComponent} from './add-block/add-block.component';
import {ChangeBlockComponent} from './change-block/change-block.component';



const routes: Routes = [
    {path: '', component: BlockListComponent},
    {path: 'blockPreview', component: BlockPreviewComponent},
    {path: 'addBlock', component: AddBlockComponent},
    {path: 'changeBlock', component: ChangeBlockComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlockRoutingModule {
}
