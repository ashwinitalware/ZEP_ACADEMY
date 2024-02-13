import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mobileverify',
    loadChildren: () => import('./mobileverify/mobileverify.module').then( m => m.MobileverifyPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'forgotpassverify',
    loadChildren: () => import('./forgotpassverify/forgotpassverify.module').then( m => m.ForgotpassverifyPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'shopping-dash',
    loadChildren: () => import('./shopping-dash/shopping-dash.module').then( m => m.ShoppingDashPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'addtocart',
    loadChildren: () => import('./addtocart/addtocart.module').then( m => m.AddtocartPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'newregistration',
    loadChildren: () => import('./newregistration/newregistration.module').then( m => m.NewregistrationPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'refundpolicy',
    loadChildren: () => import('./refundpolicy/refundpolicy.module').then( m => m.RefundpolicyPageModule)
  },
  {
    path: 'shippingpolicy',
    loadChildren: () => import('./shippingpolicy/shippingpolicy.module').then( m => m.ShippingpolicyPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'addsubscription',
    loadChildren: () => import('./addsubscription/addsubscription.module').then( m => m.AddsubscriptionPageModule)
  },
  {
    path: 'level-status',
    loadChildren: () => import('./level-status/level-status.module').then( m => m.LevelStatusPageModule)
  },
  {
    path: 'royalty-graph',
    loadChildren: () => import('./royalty-graph/royalty-graph.module').then( m => m.RoyaltyGraphPageModule)
  },
  {
    path: 'level-status-bv',
    loadChildren: () => import('./level-status-bv/level-status-bv.module').then( m => m.LevelStatusBVPageModule)
  },
  {
    path: 'income',
    loadChildren: () => import('./income/income.module').then( m => m.IncomePageModule)
  },
  {
    path: 'tsp-achiever',
    loadChildren: () => import('./tsp-achiever/tsp-achiever.module').then( m => m.TspAchieverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
