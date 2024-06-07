import { defineStore } from 'pinia';
import { api } from 'src/boot/api';
import { RServerClusterDto, RSessionDto, RWorkspaceDto, RPackageDto } from 'src/models/OpalR';


export const useRStore = defineStore('r', () => {

  const clusters = ref<RServerClusterDto[]>([]);
  const sessions = ref<RSessionDto[]>([]);
  const workspaces = ref<RWorkspaceDto[]>([]);

  async function init() {
    return Promise.all([initClusters(), initSessions(), initWorkspaces()]);
  }

  async function initClusters() {
    return api.get('/service/r/clusters').then((response) => {
      if (response.status === 200) {
        clusters.value = response.data;
      }
      return response;
    });
  }
  async function initSessions() {
    return api.get('/service/r/sessions').then((response) => {
      if (response.status === 200) {
        sessions.value = response.data;
      }
      return response;
    });
  }
  async function initWorkspaces() {
    return api.get('/service/r/workspaces').then((response) => {
      if (response.status === 200) {
        workspaces.value = response.data;
      }
      return response;
    });
  }
  async function getRPackages(clusterId: string): Promise<RPackageDto[]> {
    return api.get(`/service/r/cluster/${clusterId}/packages`).then((response) => response.data);
  }

  async function startRServer(clusterId: string, serverId: string) {
    return api.put(`/service/r/cluster/${clusterId}/server/${serverId}`).then(() => {
      initClusters();
    });
  }

  async function stopRServer(clusterId: string, serverId: string) {
    return api.delete(`/service/r/cluster/${clusterId}/server/${serverId}`).then(() => {
      Promise.all([ initClusters(), initSessions()]);
    });
  }

  async function terminateSession(session: RSessionDto) {
    return api.delete(`/service/r/session/${session.id}`);
  }

  async function terminateSessions(sessions: RSessionDto[]) {
    Promise.all(sessions.map((s) => terminateSession(s))).then(() => {
      initSessions();
    });
  }

  async function deleteWorkspace(ws: RWorkspaceDto) {
    return api.delete(`/service/r/workspaces`, { params: {
      name: ws.name,
      user: ws.user,
      context: ws.context,
    } });
  }

  async function deleteWorkspaces(workspaces: RWorkspaceDto[]) {
    Promise.all(workspaces.map((ws) => deleteWorkspace(ws))).then(() => {
      initWorkspaces();
    });
  }

  return {
    clusters,
    sessions,
    workspaces,
    init,
    getRPackages,
    startRServer,
    stopRServer,
    initSessions,
    initWorkspaces,
    terminateSessions,
    deleteWorkspaces,
  };
});
