import { ForgeRenderingDetails } from '@lcu/elements';
import { ForgeJSONSchema } from '@lcu/apps';

export class ForgeAssetsConfigManagerDetails extends ForgeRenderingDetails<ForgeAssetsConfigManagerConfig> {
	public DataSetKey: string;

	public ManageSchema: ForgeJSONSchema;
}

export class ForgeAssetsConfigManagerConfig {
}
