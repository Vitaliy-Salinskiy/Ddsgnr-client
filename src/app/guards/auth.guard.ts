import { inject } from "@angular/core";
import { AuthService } from "../services/auth-service.service"
import { Router } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { IDeactivateComponent } from "../interfaces";

export const canActivate = async (): Promise<boolean> => {
	const authService = inject(AuthService);
	const router = inject(Router);

	await lastValueFrom(authService.getProfile())

	if (authService.userProfile.value) {
		return true;
	} else {
		router.navigateByUrl("/auth/login");
		return false;
	}

}

export const canDeactivate = (component: IDeactivateComponent) => {
	return component.canExit ? component.canExit() : true;
}